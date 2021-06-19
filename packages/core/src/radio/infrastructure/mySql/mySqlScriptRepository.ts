import { ScriptRepository } from '../../script/scriptRepository';
import { Script } from 'vm';

class MySQLScriptRepository implements ScriptRepository {
  constructor(private readonly mySqlClient: MySQL) {}

  scripts(): Script[] {
    const scriptsData = this.mySqlClient.createQuery(
      'select * ~~~~~~~~~~~~~',
    ) as { id: number; title: string; content: string }[];

    return scriptsData.map((data) => new Script(data as any));
  }
}
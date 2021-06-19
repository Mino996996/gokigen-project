import { ScriptRepository } from '../../script/scriptRepository';
import { Script } from 'vm';

class MockScriptRepository implements ScriptRepository {
  constructor(private readonly returningDatas: [{}, {}, {}]) {}

  scripts(): Script[] {
    return this.returningDatas[0] as Script[];
  }
}
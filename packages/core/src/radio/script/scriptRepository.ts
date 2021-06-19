import { Script } from 'vm';

export interface ScriptRepository {
  scripts(): Script[];
}
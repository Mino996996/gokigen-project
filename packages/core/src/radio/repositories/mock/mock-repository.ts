import { sampleContent } from "../../fixtures/sample-content-data";
import  { sampleGroup } from '../../fixtures/sample-group-data';
import  { sampleUser } from '../../fixtures/sample-user-data';

// 役割：モック

export class MockRepository {
  static content() {
    return sampleContent;
  }

  static group() {
    return sampleGroup;
  }

  static User() {
    return sampleUser;
  }
}

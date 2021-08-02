import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { RadioContent, RadioService } from '../../applications/radio.service';
import { sampleNoErrorData } from '../../fixtures/sample-content-data';
import { UserContentsDto } from './dto/userContentsDto';
import { UserContentsCommand } from "../../applications/userContentsCommand";

@Controller('radio')
export class RadioController {
  constructor(private readonly radioService: RadioService) {}

  @Get('scripts')
  async allScripts(): Promise<string[]> {
    return this.radioService.scripts();
    // todo: 台本リストを返すサービスを書く
  }

  /* ユーザーIDとgroupID別で台本リストを取得する */
  @Post('user_contents')
  @HttpCode(200)
  async userContents(
    @Body() dto: UserContentsDto,
  ): Promise<RadioContent[] | string> {
    const cmd = new UserContentsCommand()
    cmd.groupId = dto.groupId
    cmd.userId = dto.userId

    return this.radioService.userContents(sampleNoErrorData, cmd);
  }
}

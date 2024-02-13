import { IVersionGroup } from "../Games/VersionGroup.ts";
import { IDescription, IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";

export interface IMoveLearnMethod {
    id: number;
    name: string;
    descriptions: IDescription[];
    names: IName[];
    version_groups: Array<INamedApiResource<IVersionGroup>>;
}

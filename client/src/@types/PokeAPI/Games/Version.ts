import { IName } from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IVersionGroup } from "./VersionGroup.ts";

export interface IVersion {
    id: number;
    name: string;
    names: IName[];
    version_group: INamedApiResource<IVersionGroup>;
}

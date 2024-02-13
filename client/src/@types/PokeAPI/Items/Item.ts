import { IEvolutionChain } from "../Evolution/EvolutionChain.ts";
import { IVersion } from "../Games/Version.ts";
import { IApiResource } from "../../Utility/ApiResourceList.ts";
import {
    IGenerationGameIndex,
    IMachineVersionDetail,
    IName,
    IVerboseEffect,
    IVersionGroupFlavorText
} from "../../Utility/CommonModels.ts";
import { INamedApiResource } from "../../Utility/NamedApiResourceList.ts";
import { IItemAttribute } from "./ItemAttribute.ts";
import { IItemCategory } from "./ItemCategory.ts";
import { IItemFlingEffect } from "./ItemFlingEffect.ts";

export interface IItem {
    id: number;
    name: string;
    cost: number;
    fling_power: number;
    fling_effect: INamedApiResource<IItemFlingEffect>;
    attributes: Array<INamedApiResource<IItemAttribute>>;
    category: IItemCategory;
    effect_entries: IVerboseEffect[];
    flavor_text_entries: IVersionGroupFlavorText[];
    game_indices: IGenerationGameIndex[];
    names: IName[];
    sprites: IItemSprites;
    held_by_pokemon: IItemHolderPokemon[];
    baby_trigger_for: IApiResource<IEvolutionChain>;
    machines: IMachineVersionDetail[];
}

export interface IItemSprites {
    default: string;
}

export interface IItemHolderPokemon {
    pokemon: string;
    version_details: IItemHolderPokemonVersionDetail[];
}

export interface IItemHolderPokemonVersionDetail {
    rarity: string;
    version: INamedApiResource<IVersion>;
}

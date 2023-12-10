/* eslint-disable camelcase */
import { IGenericObjectModel } from '@/@types/types'
import { algorithms } from '@/data/algorithms.json'
import { devlinks } from '@/data/devlinks.json'
import { fake_api } from '@/data/fake-apis.json'
import { games } from '@/data/games.json'
import { portfolios } from '@/data/portfolios.json'
import { utils } from '@/data/utils.json'

export function getData(): IGenericObjectModel[] {
  return [algorithms, devlinks, fake_api, games, portfolios, utils]
}

import * as glob from 'fast-glob'

export interface IAutoLoadOptions {
  path: string
  pattern?: string
}

export const autoLoad = async (opts: IAutoLoadOptions): Promise<any[]> => {
  const { path, pattern = '**/*.js' } = opts

  const files = await glob(pattern, {
    cwd: path,
    absolute: true
  })

  return Promise.all(files.map((file) => import(file)))
}

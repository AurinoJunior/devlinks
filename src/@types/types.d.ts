export interface IGenericObjectModel {
  id: string
  title: string
  subtitle: string
  data: {
    id: string
    name: string
    image: string
    description: string
    link: string
  }[]
}

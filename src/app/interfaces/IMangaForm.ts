
export interface IMangaForm {
  name: string,
  pic: string,
  startingChapter: number,
  chapterCount: number,
  htmlLocate: IHtmlLocate,
}

export interface IHtmlLocate {
  positions: string,
  lookedType: string,
  lookedAttr: string,
  urls: string,
}

export interface PersonInter {
  id: string,
  name: string,
  age: number
}

// 自定义类型
// export type Persons = Array<PersonInter>
export type Persons = PersonInter[]
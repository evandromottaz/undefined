import mod019 from '../objs/mod019.js'
export class AerScript {

  mod019(offer:number | string) {
    for(let i in mod019) {
      // document.body.innerHTML += this.getElement(mod019[i],offer)
    }
  }
  getElement(param:string, value:any) {
    return `document.querySelector('[data-fieldname="${param}"] input').value = ${value}`;
  }

  liferayForm(data:any[]) {
    for(let i in data[0]) {
      console.log(data[0][i])
    }
    
    // data.forEach(row => {
    //   for(let i in row) {
    //     this.mod019(row[i])
    //   }
    // })
  }
}
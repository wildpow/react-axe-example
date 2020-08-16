import data from '../data'

const dataFunc = (images) => {
  let newData = data
  images.map(image => {
    if(image.name === newData.headingImg.name) newData.headingImg.fluid = image.childImageSharp.fluid
    if(image.name === newData.heroImg.name) newData.heroImg.fluid = image.childImageSharp.fluid
    for(const tab of newData.tabBox) {
      if(image.name === tab.topImage.name) tab.topImage.fluid = image.childImageSharp.fluid
      for(const box of tab.box) {
        if(box.picture.name === image.name) box.picture.fluid = image.childImageSharp.fluid
      }
    }
  })
  return newData
}

export default dataFunc;
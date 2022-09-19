import {Component} from 'react'
import {
  MainContainer,
  Heading,
  MemeDetailsContainer,
  Input,
  Label,
  Select,
  Options,
  ImageContainer,
  GenerateButton,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    activeOptionId: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    status: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({activeOptionId: event.target.value})
  }

  onClickGenerateMeme = event => {
    event.preventDefault()
    this.setState({status: true})
  }

  render() {
    const {activeOptionId, imageUrl, topText, bottomText, status} = this.state
    return (
      <MainContainer>
        <MemeDetailsContainer>
          <Heading>Meme Generator</Heading>
          <>
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              type="text"
              placeholder="Enter the image url"
              onChange={this.onChangeImageUrl}
              value={imageUrl}
            />
          </>
          <>
            <Label htmlFor="top">Top Text</Label>
            <Input
              id="top"
              type="text"
              placeholder="Enter The Top Text"
              onChange={this.onChangeTopText}
              value={topText}
            />
          </>
          <>
            <Label htmlFor="bottom">Bottom Text</Label>
            <Input
              id="bottom"
              type="text"
              placeholder="Enter The Bottom Text"
              onChange={this.onChangeBottomText}
              value={bottomText}
            />
          </>
          <>
            <Label htmlFor="size">Font Size</Label>
            <Select
              onChange={this.onChangeOptionId}
              value={activeOptionId}
              id="size"
            >
              {fontSizesOptionsList.map(eachSize => (
                <Options value={eachSize.optionId} key={eachSize.optionId}>
                  {eachSize.displayText}
                </Options>
              ))}
            </Select>
          </>
          <GenerateButton type="submit" onClick={this.onClickGenerateMeme}>
            Generate
          </GenerateButton>
        </MemeDetailsContainer>
        <ImageContainer status={status} imageUrl={imageUrl} data-testid="meme">
          <Paragraph size={activeOptionId}>{topText}</Paragraph>
          <Paragraph size={activeOptionId}>{bottomText}</Paragraph>
        </ImageContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator

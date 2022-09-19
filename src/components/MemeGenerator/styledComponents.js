import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 85%;
  margin: auto;
`
export const MemeDetailsContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 50px;
  color: #35469c;
  font-weight: 600;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 10px;
`

export const Input = styled.input`
  width: 85%;
  padding: 13px;
  border: 1px solid #5a7184;
  border-radius: 7px;
  font-size: 18px;
  outline: none;
  margin-bottom: 30px;
`
export const Select = styled.select`
  width: 85%;
  padding: 13px;
  border: 1px solid #5a7184;
  border-radius: 7px;
  font-size: 18px;
  margin-bottom: 30px;
`
export const Options = styled.option`
  font-size: 20px;
  color: #5a7184;
`
export const GenerateButton = styled.button`
  width: 150px;
  height: 45px;
  background-color: #0b69ff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  color: #ffffff;
  cursor: pointer;
`
export const ImageContainer = styled.div`
  width: 90%;
  height: 500px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  background-size: cover;
  background-image: url('${props => (props.status ? props.imageUrl : null)}');
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: ${props => props.size}px;
`

import { render, screen } from '@tests/index'
import Header from '@components/header'

describe('Testando o componente "Header"', () => {
  it('Renderizar 8 categorias', () => {
    render(<Header />)
    const numberOfCategories = screen.getByText('Assistência Técnica')
    expect(numberOfCategories).toBeTruthy()
  })
})

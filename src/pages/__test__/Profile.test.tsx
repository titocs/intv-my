import { render,screen } from "@testing-library/react"
import Profile from "../Profile"

describe('Profile show up', () => {
  test('Render correctly', () => {
    render(<Profile />);
    const elemen = screen.getByText('Profile Details');
    expect(elemen).toBeInTheDocument();
  })
})
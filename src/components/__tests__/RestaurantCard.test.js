const { render,screen } = require("@testing-library/react");
import RestaurantCard, { withPromotedLabel } from '../RestaurantCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom'

it("Should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Aryan Family's Delight");
    expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with promoted label", () => {
    const RestaurantCardWithLabel = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardWithLabel resData={MOCK_DATA} />);
    
    const promotedLabel = screen.getByText("Promoted");
    const name = screen.getByText("Aryan Family's Delight");
    
    expect(promotedLabel).toBeInTheDocument();
    expect(name).toBeInTheDocument();
});
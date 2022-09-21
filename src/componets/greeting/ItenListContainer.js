
const ItemListContainer = ({greeting}) => {

    const styles = {

        border: 'solid 2px red',
        color: 'yellow',
    }

    return(
        
        <div style={styles} className="m-10">{greeting}
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </div>
    );
}
export default ItemListContainer;


export default function ChoosenProcut({ choosenProcuts }) {
    return (
        <>
            <p>Your Item: </p>
            <ul>
                {choosenProcuts.length === 0 ? (
                    <li>No ordered Product</li>
                ): (
                choosenProcuts.map(({product, total}, index) => (
                  <li key={index}>
                    Product Name: {product}, total: {total}
                  </li>  
                )))}
            </ul>
        </>
    )
}
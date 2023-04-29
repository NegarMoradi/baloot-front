

const Product = () => {
    return (
        <div class="item pt-3">
            <p class="item-title">Huawei nova 9</p>
            <p class="item-count">1 left in stock</p>
            {/* <img class="w-100" src="" alt="item image"> */}
            <div class="item-details d-flex justify-content-between align-items-center m-2">
                <p class="mb-0">300$</p>
                <button>add to cart</button>
            </div>
        </div>
    )
}

export default Product;
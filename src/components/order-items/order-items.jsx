import './order-items.css'



export default function OrderItems({ film }) {
    return (
        <div className='order-item'>
            <div className='resp_order'>
                <div className='order-item_cover'>
                    <img className='order-item_image' src={film.image} alt={film.title} />
                </div>
                <div className='order-item_title'>
                    <span className='film-title'>{film.title}</span>
                    <div>
                        <span className='order-items_genres'>Жанр</span>
                        <span className='order-items_genre'>{film.genres}</span>
                    </div>
                    <h1 className='order-item_genres'>Описание</h1>
                    <p className='order-item_genre'>{film.description}</p>
                </div>
            </div>
        </div>
    )
}

import './MenuResto.css'

function MenuResto(){


    // looping
        const menu = [
            {nama: 'nasi bakar', harga: 'Rp. 10.000' }, // -> dibuat object
            {nama: 'Mie Goreng', harga: 'Rp. 7.000' },
            {nama:  'Ayam Goreng', harga: 'Rp. 10.000' },
        ]
    
    return(
        <>
        {
            menu.map((item, index) =>{
                return (
                <div className="menu-item" key={index}>
                    <div><b>Nama Menu : </b><em>{item.nama}</em></div>
                    <div><b>Nama Menu : </b><em>{item.harga}</em></div>
                 </div>
                )
            }) 
        }
        </>

    )
}

export default MenuResto
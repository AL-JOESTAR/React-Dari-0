import './MenuResto.css'

function MenuResto(){

    const isMakanan = true; // Ternary oprator
    
    return(
        <div className="menu-item">
        <div><b>Nama Menu : </b><em>Nasi Bakar Pak Agus</em></div>
        <div><b>Harga : </b><em>Rp. 20.000</em></div>
        {(isMakanan == true) ? (<div>Tipe : Makanan</div>) : (<div>bukan makanan</div>)} {/* jika kondisi true dia ambil dibelakang ?, jika false di belakang :  */}
        {/*{(isMakanan == true) && (<div>Tipe : Makanan</div>) -> untuk and and opration*/}
        </div>
    )
}

export default MenuResto
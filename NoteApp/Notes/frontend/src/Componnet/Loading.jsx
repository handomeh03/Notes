import style from "../CSS/Loading.module.css";
export default function Loading(){
    return(
        <div className={style.loading} style={{display:"flex",alignItems:"center",justifyContent:"center",height:"calc(100vh - 60px)"}}>
                <div className={style.load}></div>
            </div>
    );
}
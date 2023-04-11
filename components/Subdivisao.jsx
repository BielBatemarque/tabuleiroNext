import  styles from './subdivisao.module.css';

export const Subdivisao = (props) => {
    return(
        <div style={{
            backgroundColor: props.preta ? "#000" : "#FFF"
        }} className={styles.subdivisao}>
            
        </div>
    );
};
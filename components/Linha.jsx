import { Subdivisao } from "./Subdivisao";
import styles from './linha.module.css';

export const Linha = (props) => {
    return(
        <div className={styles.linha}>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta} />
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta} />
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta} />
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta} />

        </div>
    );
};
import { IItem } from './index';
import KeysItem from './KeysItem';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const sortingMap = props.initialData
        .map((item: IItem) => {
            return (
                <li key={item.id}>
                    <KeysItem name={item.name} />
                </li>
            );
        })
        .sort();
    return (
        <div>{props.sorting === 'ASC' ? sortingMap : sortingMap.reverse()}</div>
    );
}

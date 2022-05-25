import { IItem } from './index';
import KeysItem from './KeysItem';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    return (
        <div>
            {props.sorting === 'ASC'
                ? props.initialData
                      .map((item: IItem) => {
                          return (
                              <li key={item.id}>
                                  <KeysItem name={item.name} />
                              </li>
                          );
                      })
                      .sort()
                : props.initialData
                      .map((item: IItem) => {
                          return (
                              <li key={item.id}>
                                  <KeysItem name={item.name} />
                              </li>
                          );
                      })
                      .sort()
                      .reverse()}
        </div>
    );
}

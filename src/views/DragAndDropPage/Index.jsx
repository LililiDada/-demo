import React, {useMemo , useState} from 'react';
import styles from './index.module.scss';
//  每行多少列
const COLUMN = 4;
//  每个元素宽度
const WIDTH = 120;
//  每个元素高度
const HEIGHT = 80;
// 图片左右 padding
const IMAGE_PADDING = 5;

const showList = [
    {
        id: 2,
        name: 'osmo pocket',
        image:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605703865983&di=a35a43a3b9e866f1ee0048563bfd2577&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F5d8f2523322e3f4de91021701e95182c.jpeg',
    },
    {
        id: 4,
        name: 'mavic pro',
        image:
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=787082346,3090178555&fm=15&gp=0.jpg',
    },
    {
        id: 1,
        name: 'mavic mini2',
        image:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605703111703&di=59fa621eb1e7f8f4285b95df80e11fd0&imgtype=0&src=http%3A%2F%2Fp1.itc.cn%2Fimages01%2F20201105%2F600892c32d524b99a118ea56cdf3c211.png',
    },
    {
        id: 3,
        name: '机甲大师s1',
        image:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605703133913&di=a415583ce97dd0a34efe17cac24a97ab&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200325%2F64ebb68f1125450f91e64bb34dc19d55.jpeg',
    },
    {
        id: 0,
        name: 'mavic 2',
        image:
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4132295553,3011440949&fm=26&gp=0.jpg',
    },
];

// 将某元素插入到数组中的某位置
export function insertBefore(list,from,to){
    const copy = [...list];
    const fromIndex = copy.indexOf(from);
    if(from===to){
        return copy;
    }
    copy.splice(fromIndex,1);
    const newToIndex = to ? copy.indexOf(to) : -1;
    if(to && newToIndex >= 0){
        copy.splice(newToIndex,0,from)
    }else{
        // 没有to,或者to不在序列里，将元素移动到末尾
        copy.push(from)
    }
    return copy
}

const DragAndDropPage = () => {
    const [list,setList] = useState(showList);

    // IMPORTANT:动画需要，保持一定的渲染顺序
    const sortedList = useMemo(() => {
        return list.slice().sort((a,b) => {
            return a.id - b.id;
        });
    },[list])

    const listHeight = useMemo(() => {
        const size = list.length;
        return Math.ceil(size / COLUMN) * HEIGHT
    },[list])

    console.log(sortedList)
    return(
        <div
            className={styles.wrapper}
            style={{width:COLUMN * (WIDTH + IMAGE_PADDING) + IMAGE_PADDING}}
        >
            <ul
                className={styles.list}
                style={{height:listHeight}}
            >
                {
                    sortedList.map((item) => {
                        const index = list.findIndex((i) => i===item);
                        const row = Math.floor(index / COLUMN);
                        const col = index % COLUMN;
                        return(
                            <li
                                draggable
                                key={item.id}
                                className={styles.item}
                                style={{
                                    height:HEIGHT,
                                    left: col * (WIDTH + IMAGE_PADDING),
                                    top: row * HEIGHT,
                                    padding: `0${IMAGE_PADDING}px`
                                }}
                                data-id = {item.id}
                            >
                                <img src={item.image} alt={item.name} width={WIDTH} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default React.memo(DragAndDropPage);
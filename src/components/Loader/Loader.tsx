import React, {FC} from 'react';

type PropsType = {
    loading: boolean
}

export const Loader: FC<PropsType> = ({loading}) => {
    return loading ? <div>Loading...</div> : null;
};


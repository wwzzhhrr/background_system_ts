import { IconSearch } from '@douyinfe/semi-icons';
import { Input } from '@douyinfe/semi-ui';
import Avatar from '../Avatar';

function Person() {
    return (
        <>
            <Input prefix={<IconSearch />} showClear></Input>
            <Avatar />
        </>
    );
}

export default Person;
import { Upload } from '@douyinfe/semi-ui';
import { IconPlus } from '@douyinfe/semi-icons';

function Avatar() {
    const action = 'https://api.semi.design/upload';

    return (
        <>
            <Upload
                action={action}
                listType="picture"
            >
                <IconPlus size="extra-large" />
            </Upload>
        </>

    );
}

export default Avatar;
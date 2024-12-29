import { Upload, Button } from '@douyinfe/semi-ui';
import { IconUpload } from '@douyinfe/semi-icons';

function Files() {
    const action = 'https://api.semi.design/upload';
    return (
        <Upload multiple>
            <Button
                action={action}
                icon={<IconUpload />}
                theme="light"
            >
                点击上传
            </Button>
        </Upload>
    );
}

export default Files;

import { Modal } from '@douyinfe/semi-ui';
import { Divider } from '@douyinfe/semi-ui';
import { Typography } from '@douyinfe/semi-ui';
import Title from '../Title';
import Introduction from '../Introduction';
import Competency from '../Competency';
import Files from '../Files';
import Avatar from '../Avatar';
import Person from '../Person';

interface CreateArtifactButtonProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

function CreateArtifactModal({ visible, setVisible }: CreateArtifactButtonProps) {

    const { Text } = Typography;

    const handleOk = () => {
        setVisible(false);
        // upload artifact
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <Modal
            title="Upload"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            closeOnEsc={true}
            fullScreen={true}
            bodyStyle={{ overflow: 'auto', height: '100vh' }}
        >
            <Divider />
            <div style={{ margin: '20px 0' }}>
                <Text code>Title</Text>
                <Title />
            </div>
            <div style={{ margin: '20px 0' }}>
                <Text code>Introduction</Text>
                <Introduction />
            </div>
            <div style={{ margin: '20px 0' }}>
                <Text code>Competency</Text>
                <br />
                <Competency />
            </div>
            <div style={{ margin: '20px 0' }}>
                <Text code>Avatar</Text>
                <Avatar />
            </div>
            <div style={{ margin: '20px 0' }}>
                <Text code>Files</Text>
                <Files />
            </div>
            <div style={{ margin: '20px 0' }}>
                <Text code>Learners</Text>
                <Person />
            </div>
            <div style={{ margin: '20px 0' }}>
                <Text code>Instructors</Text>
                <Person />
            </div>

        </Modal>
    );
}

export default CreateArtifactModal;
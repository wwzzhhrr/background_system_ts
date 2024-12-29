import { useState } from 'react';
import { Button } from '@douyinfe/semi-ui';
import CreateArtifactModal from '../ArtifactModal/MainModal';


const CreateArtifactButton: React.FC = () => {

    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    return (
        <>
            <Button onClick={showDialog}>+ Upload New Artifact</Button>
            <CreateArtifactModal visible={visible} setVisible={setVisible} />
        </>
    );
};

export default CreateArtifactButton;
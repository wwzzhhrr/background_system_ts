import { Select } from '@douyinfe/semi-ui';


function Competency() {

    const Option = Select.Option;

    return (
        <Select defaultValue="douyin" style={{ width: 120 }}>
            <Option value="douyin">抖音</Option>
            <Option value="ulikecam">轻颜相机</Option>
            <Option value="jianying">剪映</Option>
        </Select>
    );
}

export default Competency;
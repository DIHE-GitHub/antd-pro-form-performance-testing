import {
  ProForm,
  ProFormGroup,
  ProFormList,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Form, Input } from "antd";
import { times } from "lodash-es";
import { Profiler, ProfilerOnRenderCallback, startTransition, useMemo } from "react";

const Demo = () => {
  const [form] = ProForm.useForm();

  function onClick() {
    const mockLabels = genMockLabels();
    // const labels = form.getFieldValue("labels")
    // labels[0] = genMockLabel(0)
    const labels = mockLabels
    // startTransition(() => {
    form.setFieldValue("labels", labels);
    // form.setFieldsValue({ labels });
    // })
  }

  console.log({ form });


  return (
    <>
      <Button onClick={onClick}>setFieldValue</Button>
      <Profiler id="Content" onRender={onRender}>
        <ProForm form={form}>
          {useMemo(() => {
            return <ProFormList name="labels" label="用户信息" actionRender={() => []} >
              <Row />
            </ProFormList>
          }, [])}
        </ProForm >
      </Profiler>
    </>
  );
};

export default Demo;

function Row() {
  return (
    <ProFormGroup>
      <ProFormText name="value" label="值" />
      <ProFormText name="label" label="显示名称" />
    </ProFormGroup>
  );
}

function genMockLabels(n: number = 20) {
  return times(n, (n) => (genMockLabel(n)));
}
function genMockLabel(v: number): { value: number; label: number; } {
  return {
    value: Math.random(),
    label: v,
  };
}

function onRender(...[
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions,
]: Parameters<ProfilerOnRenderCallback>) {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
}

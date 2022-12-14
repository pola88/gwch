import React from 'react';

type LabelPropts = {
  children: React.ReactNode
};

const Label = (props: LabelPropts) => {
  return <label style={{ margin: 10, marginLeft: 0, fontWeight: 600 }} {...props} />;
};

export default Label;
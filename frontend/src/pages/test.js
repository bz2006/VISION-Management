// eslint-disable-next-line no-lone-blocks
{/* <Select
size={size}
value={Marketplc}
onChange={(value) => {
  setMarketplc(value);
  FetchCatlog(value)
}}
defaultValue="Market Place"
style={{
  width: 200, marginRight: "5%"
}}
options={Markets}
/>


<Select
    showSearch
    style={{
      width: 200, marginRight: "5%"
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  /> */}
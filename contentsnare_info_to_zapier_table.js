const data = JSON.parse(inputData.data);
output = {};

// Fill in the existing fields
output['Request ID'] = data.id;
output['Request Name'] = data.name;
output['URL'] = data.url;
output['Due Date'] = data.due_date;
output['Folder'] = data.folder_name;
output['Share Link'] = data.share_link;
output['Template Name'] = data.request_template_name;
output['Owner'] = data.owner_name;
output['Client Name'] = data.client.full_name;
output['Company Name'] = data.client.company_name;
output['Email'] = data.client.email;
output['Phone'] = data.client.phone;

data.pages.forEach(page => {
  page.sections.forEach(section => {
    section.fields.forEach(({ name, values }) => {
      // Add the field value to the output
      output['Values ' + page.name + ' ' + section.name + ' ' + name] = values.join(', ');

      // Check for Payment Option and Payment ID
      if (name === "Payment Option") {
        output['Payment Type'] = values.join(', ');
      }
      if (name === "Payment ID") {
        output['Payment ID'] = values.join(', ');
      }
    });
  });
});

console.log(output);
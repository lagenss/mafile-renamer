const fs = require("fs");

fs.readdir('in', (err, files) => 
{
    if (err)
      console.log('Error!' + err);

    else {
      files.forEach(file => 
      {
      	console.log(file + " exist")
        let acc = JSON.parse(fs.readFileSync(`in/${file}`, 'utf-8'));
        console.log(acc.account_name);
        fs.writeFileSync(`out/${acc.account_name}.maFile`, JSON.stringify(acc));
      })
    }
  })
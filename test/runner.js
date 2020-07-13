const csv = require('csv-parser');
const fs = require('fs');
const path = require('path')
const Mocha = require('mocha')
const exec = require("child_process").exec;

const testFolder = './testcases';
const writeDir = "./testfilesready"

if(!fs.existsSync(writeDir)){
	fs.mkdirSync(writeDir);
}else{
	fs.readdir(writeDir, (err, files) => {
		if (err) throw err;
	  
		for (const file of files) {
		  fs.unlink(path.join(writeDir, file), err => {
			if (err) throw err;
		  });
		}
	  });
}
fs.writeFile(writeDir+"/mocha.opts", "--timeout 15000", function(err) {
if(err) {
       console.log(err);
   }
})

const mocha = new Mocha();
//mocha.options.opts = "./TestFilesReady/mocha.opts";

var testFilesReady = fs.readdirSync(testFolder);
const totalFiles = testFilesReady.length;
var fileIndex = 0;

testFilesReady.forEach(fn => {
    var rFile = `${testFolder}/${fn}`;
    var wFile = `${writeDir}/${fn}`;
    var fc = fs.readFileSync(rFile).toString();
	console.log(rFile);
	console.log(wFile);
    //Replacing Test case ID in the generated code with the value provided in CSV

	fs.createReadStream('testcaseInput.csv')
		.pipe(csv())
		.on('data', (row) => {
	
	if(row['TestParam'].includes("REQUEST_BODY")){
		var paramValue = row["ParamValue"].replace("“", '"')
			.replace("”", '"')
			.replace("‘", "'")
			.replace("’", "'")
		fc = fc.replace(`"${row['TestParam']}"`, paramValue);	
	} else{
		fc = fc.replace(row['TestParam'], row['ParamValue']);
	}
		
	}).on("end", (err) => {
		fs.writeFile(wFile, fc, (err) => {
			fileIndex = fileIndex + 1;

			if (!err) {
				console.log(`File written successfully => ${wFile}.`);
			}

			//Running the generated test cases in command line using exec method
			console.log("file index length : "+fileIndex);
			console.log("totalFiles length : "+totalFiles.length);
			if (fileIndex == totalFiles) {
				console.log("Added all the tests files to Mocha...");
				exec('./node_modules/mocha/bin/mocha --opts '+testFolder+'/mocha.opts '+writeDir+'/', (error, stdout, stderr) => {
				//console.log("STDOUT START:");
				console.log(stderr);
				console.log(stdout);
				//console.log("STDOUT END");
				});
			}
		});
	});
});

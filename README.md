### Sample that shows how to use [SelectionRangeProvider](https://github.com/Microsoft/vscode/blob/8795a9889db74563ddd43eb0a897a2384129a619/src/vs/vscode.d.ts#L3863)

* build with `yarn` command
* you'll get `eclipse_che_selection_range_provider_sample.theia`
* build Theia from [PR#7534](https://github.com/eclipse-theia/theia/pull/7534)
* move `eclipse_che_selection_range_provider_sample.theia` to Theia plugins folder
* run Theia
* create simple text file, e.g. `test.txt`
* insert any text into opened editor, e.g. [Lorem Ipsum](https://www.lipsum.com/feed/html)
* tag any piece of text with `{SHOULD_BE_SELECTED}any text{/SHOULD_BE_SELECTED}`

<img width="1504" alt="theia — Theia Browser Example 2020-04-17 12-37-52" src="https://user-images.githubusercontent.com/1968177/79555679-a6d41780-80a8-11ea-87e6-866edd3c7432.png">

* locate cursor between above tags
* call `Expand Selection` command, it will select word under cursor
* call `Expand Selection` command again, it will select the whole piece of text arround tag `SHOULD_BE_SELECTED`

<img width="1493" alt="theia — Theia Browser Example 2020-04-17 12-44-01" src="https://user-images.githubusercontent.com/1968177/79556027-29f56d80-80a9-11ea-8acf-e601b42b7eef.png">

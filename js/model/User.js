class User extends ORM {

	constructor(id = null, rankID = null, lastName = null, firstName = null, driver = '', taskID = null, flagID=null, languageID=null, taskStartedAt = null, showLogs=false) {
		super(id, {rankID: rankID, lastName: lastName, firstName: firstName, driver: driver, taskID: taskID, flagID: flagID, languageID:languageID, taskStartedAt:taskStartedAt, showLogs: showLogs});
	}

}

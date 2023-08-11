
## Candidate Status API Documentation

The Candidate Status API allows you to retrieve candidate status information for a given user. It provides information about the total number of candidates created by the user and the count of candidates with different status types.




### Endpoints

#### `POST /user/add`

Adds a new user to the system.

##### Request Body

```json
{
  "uid": 4,
  "name": "Rahul"
}
```

##### Response

```json
{
  "message": "User added successfully",
  "result": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 1,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
  }
}
```

#### `POST /user/addCandidate`

Adds a new candidate for a specific user.

##### Request Body

```json
{
  "uid": 4,
  "CandidateName": "Priyanka"
}
```

##### Response

```json
{
  "message": "Candidate added successfully",
  "result": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 1,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
  }
}
```

#### `POST /user/updateStatus`

Updates the status of a candidate.

##### Request Body

```json
{
  "cid": 1,
  "status": "joined"
}
```

##### Response

```json
{
  "message": "Candidate status updated successfully",
  "result": {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 1,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
  }
}
```

#### `POST /user/fetchStatus`

Fetches the status counts for candidates created by a specific user.

##### Request Body

```json
{
  "uid": 4
}
```

##### Response

```json
{
  "message": "Status fetched successfully !!",
  "statusCounts": {
    "Uid": 4,
    "TotalCandidates": 3,
    "Joined": 2,
    "Interview": 1
  }
}
```


/**
 * Tight coupling between EmployeeDAO and concrete SQL classes
 */

export default class EmployeeDAO {
  getEmployee() {
    const connection = new SQLConnection();
    connection.connectionString();

    const command = new SQLCommand();
    command.commandText();
    command.setConnection(connection);

    const reader = new SQLDataReader();
    reader.executeReader();
  }
}

class SQLConnection {
  connectionString() {
    console.log('connecting to SQL DB');
  }
}

class OracleConnection {
  connectionString() {
    console.log('connecting to Oracle DB');
  }
}

class SQLCommand {
  commandText() {
    console.log('SQL commandText');
  }
  setConnection(connection: SQLConnection) {
    console.log('Setting SQL connection');
  }
}

class OracleCommand {
  commandText() {
    console.log('SQL commandText');
  }
  setConnection(connection: OracleConnection) {
    console.log('Setting SQL connection');
  }
}

class SQLDataReader {
  executeReader() {
    console.log('Executing SQL Reader');
  }
}

class OracleDataReader {
  executeReader() {
    console.log('Executing Oracle Reader');
  }
}


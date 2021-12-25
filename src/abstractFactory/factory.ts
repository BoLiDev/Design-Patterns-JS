/**
 * 1. By factory method we are successfully transferred to loose coupling from tight coupling
 * 2. problem: connectionFactory / commandFactory / dataReaderFactory must be in the same category, otherwise it will cause error
 */

 export default class EmployeeDAO {
  getEmployee(connectionFactory: DBConnectionFactory, commandFactory: DBCommandFactory, dataReaderFactory: DBDataReaderFactory) {
    const connection = connectionFactory.createDBConnection();
    connection.connectionString();

    const command = commandFactory.createDBCommand();
    command.commandText();
    command.setConnection(connection);

    const reader = dataReaderFactory.createDBDateReader();
    reader.executeReader();
  }
}

// ========== Connection ===============
abstract class DBConnection {
  abstract connectionString():void;
}

abstract class DBConnectionFactory {
  abstract createDBConnection():DBConnection;
}

class SQLConnection extends DBConnection{
  connectionString() {
    console.log('connecting to SQL DB');
  }
}

class SQLConnectionFactory extends DBConnectionFactory {
  createDBConnection() {
    return new SQLConnection();
  }
}

class OracleConnection extends DBConnection{
  connectionString() {
    console.log('connecting to Oracle DB');
  }
}

class OracleConnectionFactory extends DBConnectionFactory {
  createDBConnection() {
    return new OracleConnection();
  }
}


// ========== Command ===============
abstract class DBCommand {
  abstract commandText(): void;
  abstract setConnection(connection: DBConnection):void;
}

abstract class DBCommandFactory {
  abstract createDBCommand():DBCommand;
}

class SQLCommand extends DBCommand{
  commandText() {
    console.log('SQL commandText');
  }
  setConnection(connection: SQLConnection) {
    console.log('Setting SQL connection');
  }
}

class SQLCommandFactory extends DBCommandFactory{
  createDBCommand() {
    return new SQLCommand();
  }
} 

class OracleCommand extends DBCommand{
  commandText() {
    console.log('SQL commandText');
  }
  setConnection(connection: OracleConnection) {
    console.log('Setting SQL connection');
  }
}

class OracleCommandFactory extends DBCommandFactory{
  createDBCommand() {
    return new OracleCommand();
  }
} 

// ========== DataReader ===============
abstract class DBDateReader {
  abstract executeReader():void;
}

abstract class DBDataReaderFactory {
  abstract createDBDateReader():DBDateReader;
}

class SQLDataReader extends DBDateReader{
  executeReader() {
    console.log('Executing SQL Reader');
  }
}

class SQLDataReaderFactory extends DBDataReaderFactory {
  createDBDateReader() {
    return new SQLDataReader();
  }
}

class OracleDataReader extends DBDateReader{
  executeReader() {
    console.log('Executing Oracle Reader');
  }
}

class OracleDataReaderFactory extends DBDataReaderFactory {
  createDBDateReader() {
    return new OracleDataReader();
  }
}


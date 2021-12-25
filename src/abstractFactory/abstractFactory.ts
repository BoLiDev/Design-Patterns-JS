export default class EmployeeDAO {
  getEmployee(dbFactory: DBFactory) {
    const connection = dbFactory.createDBConnection();
    connection.connectionString();

    const command = dbFactory.createDBCommand();
    command.commandText();
    command.setConnection(connection);

    const reader = dbFactory.createDBDateReader();
    reader.executeReader();
  }
}

// ========== Abstract Class ===============
abstract class DBConnection {
  abstract connectionString():void;
}

abstract class DBCommand {
  abstract commandText(): void;
  abstract setConnection(connection: DBConnection):void;
}

abstract class DBDateReader {
  abstract executeReader():void;
}

abstract class DBFactory {
  abstract createDBConnection(): DBConnection;
  abstract createDBCommand(): DBCommand;
  abstract createDBDateReader(): DBDateReader;
}

// ========== SQL Discrete Class ===============
class SQLConnection extends DBConnection{
  connectionString() {
    console.log('connecting to SQL DB');
  }
}

class SQLCommand extends DBCommand{
  commandText() {
    console.log('SQL commandText');
  }
  setConnection(connection: SQLConnection) {
    console.log('Setting SQL connection');
  }
}

class SQLDataReader extends DBDateReader{
  executeReader() {
    console.log('Executing SQL Reader');
  }
}


class SQLFactory extends DBFactory {
  createDBConnection() {
    return new SQLConnection();
  }
  createDBCommand() {
    return new SQLCommand();
  }
  createDBDateReader(): DBDateReader {
    return new SQLDataReader();
  }
}

// ========== Oracle Discrete Class ===============
class OracleConnection extends DBConnection{
  connectionString() {
    console.log('connecting to Oracle DB');
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

class OracleDataReader extends DBDateReader{
  executeReader() {
    console.log('Executing Oracle Reader');
  }
}

class OracleFactory extends DBFactory {
  createDBConnection() {
    return new OracleConnection();
  }
  createDBCommand() {
    return new OracleCommand();
  }
  createDBDateReader(): DBDateReader {
    return new OracleDataReader();
  }
}


const employeeDAO = new EmployeeDAO();
employeeDAO.getEmployee(new SQLFactory());
employeeDAO.getEmployee(new OracleFactory());
################################################################################
## body start                                                               ##
################################################################################
from typedb.client import *
from loguru import logger as Logger
from posixpath import basename
import json
import os
import sys
import argparse
from datetime import datetime


@Logger.catch
def main(dbhost, dbport, dbdatabase, dbquery, outputfile, logger: Logger):

  outputjson = {}
  typeDBConnect = f'{dbhost}:{dbport}'
  with TypeDB.core_client(typeDBConnect) as client:
      with client.session(dbdatabase, SessionType.DATA) as session:
          with session.transaction(TransactionType.READ) as read_transaction:
              answer_iterator = read_transaction.query().match(dbquery)
              # TODO: process answer_iterator and fill outputjson wit yout data

  with open(outputfile, "w") as outfile:
      json.dump(outputjson, outfile)

  logger.info('================ Schema ==================')
  logger.info(f"{basic['G_types']}")

@Logger.catch
def getArgs():

  parser = argparse.ArgumentParser(description="Script params",
                                formatter_class=argparse.ArgumentDefaultsHelpFormatter)
  parser.add_argument("dbhost", nargs='?', default="localhost", help="server host (default: %(default)s)")
  parser.add_argument("dbport", nargs='?', default="1729", help="server port (default: %(default)s)")
  parser.add_argument("dbdatabase", nargs='?', default="typerefinery", help="server database (default: %(default)s)")
  parser.add_argument("dbquery", nargs='?', default=gquery, help="query to use (default: %(default)s)")
  parser.add_argument("outputfile", nargs='?', default=f"{basename(__file__)}_output.json", help="output file (default: %(default)s)")
  return parser.parse_args()

if __name__ == '__main__':
  args = getArgs()
  # setup logger for init
  log = Logger
  log.remove()
  log.add(f'{basename(__file__)}_{datetime.timestamp(datetime.now())}-init.log', level="INFO")
  log.info(args)
  main(args.dbhost, args.dbport, args.dbdatabase, args.dbquery, args.outputfile, log)


################################################################################
## body end                                                                 ##
################################################################################

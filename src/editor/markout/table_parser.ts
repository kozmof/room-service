type TableParseCondition = {
  tableStart: boolean,
  headerStart: boolean;
  headerEnd: boolean;
  rowEnd: boolean;
  seqCount: number;
  tableWidth: number;
}

const table_parser = (text: string) => {
  const table: Array<Array<string>> = [];
  const lines: Array<string> = text.split("\n");
  const pc: TableParseCondition = {
    tableStart: false,
    headerStart: false,
    headerEnd: false,
    rowEnd: false,
    seqCount: 0,
    tableWidth: 0
  }

  const tableStartPattern: string = "=";
  const itemPattern: string = ": .*";
  const headerEndPattern: string = "=";
  const rowEndPattern: string = "-";

  let row: Array<string> = [];

  for (const line of lines) {
    if (line.match(tableStartPattern) && !pc.tableStart) {
      pc.tableStart = true;
    } 
    
    if (line.match(itemPattern) && pc.tableStart) {
      row.push(line.slice(2))
      pc.seqCount += 1;
      pc.headerStart = true;
    } else if (!pc.headerStart && pc.tableStart) {
      return []
    } 

    if (line.match(itemPattern) && pc.headerStart && !pc.headerEnd && pc.tableStart) {
      row.push(line.slice(2));
      pc.seqCount += 1;
    } else if (line.match(headerEndPattern) && pc.headerStart && pc.tableStart) {
      pc.headerEnd = true;
      pc.tableWidth = pc.seqCount;
      pc.seqCount = 0;
      table.push(row);
      row = [];
    } else if (!pc.headerEnd && pc.headerStart && pc.tableStart) {
      return []
    }

    if (line.match(itemPattern) && pc.headerStart && pc.headerEnd && pc.tableStart) {
      row.push(line.slice(2));
      pc.rowEnd = false;
      pc.seqCount += 1;
    } else if (line.match(rowEndPattern) && pc.headerStart && pc.headerEnd && pc.tableStart && pc.seqCount == pc.tableWidth) {
      pc.rowEnd = true;
      pc.seqCount = 0;
      table.push(row);
      row = [];
    } else if (pc.rowEnd && pc.headerStart && pc.headerEnd && pc.tableStart) {
      return table;
    } else if (!pc.rowEnd && pc.headerStart && pc.headerEnd && pc.tableStart) {
      return [];
    }
  }
}
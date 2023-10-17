import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const params: any = {
    serviceKey: process.env.API_KEY,
    returnType: 'json',
    numOfRows: '100',
    pageNo: '1',
    searchDate: '2023-10-17',
    InformCode: 'PM10',
  };

  const queryString = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?${queryString}`,
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json({ ...data });
  } catch (e: any) {
    console.log('****', e);
    return NextResponse.json({
      result: 'false',
      message: e.message ?? 'Server Error',
    });
  }
}
